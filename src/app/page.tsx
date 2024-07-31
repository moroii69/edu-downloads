"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// TypographyH1 Component
function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white mb-6">
      Access{" "}
      <span className="underline" style={{ textDecorationColor: "rgba(255, 255, 255, 0.5)" }}>
        assignment
      </span>{" "}
      and{" "}
      <span className="underline" style={{ textDecorationColor: "rgba(255, 255, 255, 0.5)" }}>
        surprise test
      </span>{" "}
      Q/A.
    </h1>
  );
}

// TypographyMuted Component
function TypographyMuted() {
  return (
    <p className="text-sm" style={{ color: "rgb(161, 161, 170)" }}>
      Please select the appropriate options.
    </p>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-sm text-center mb-4" style={{ color: "rgb(161, 161, 170)" }}>
      <p className="mb-4">
        developed by{" "}
        <a href="https://github.com/moroii69" target="_blank" rel="noopener noreferrer" className="underline">
          ufraaan
        </a>
      </p>
    </footer>
  );
}

export default function Home() {
  const [firstValue, setFirstValue] = React.useState<string | null>(null);
  const [secondValue, setSecondValue] = React.useState<string | null>(null);
  const [thirdValue, setThirdValue] = React.useState<string | null>(null);

  const allSelected = firstValue && secondValue && thirdValue;

const handleDownload = () => {
  let filePath = "";

  // Construct file path based on selected values
  if (firstValue === "assignment") {
    filePath = `data/ass/${secondValue}/${thirdValue}/rtg.pdf`;
  } else if (firstValue === "surprise-test") {
    filePath = `data/st/${secondValue}/${thirdValue}/rtg.pdf`;
  }

  // Open the file path based on the environment
  if (filePath) {
    if (process.env.NODE_ENV === "development") {
      // For local development
      window.location.href = `http://localhost:5000/${filePath}`;
    } else {
      // For production
      window.location.href = `/${filePath}`;
    }
  }
};



  return (
    <main className="relative flex min-h-screen bg-black items-center justify-center flex-col p-4">
      {/* TypographyH1 Component */}
      <TypographyH1 />

      {/* TypographyMuted Component */}
      <div className="mb-6">
        <TypographyMuted />
      </div>

      {/* Dropdowns in Landscape Mode */}
      <div className="flex space-x-6 mb-6">
        {/* First Dropdown */}
        <Select onValueChange={(value) => setFirstValue(value)}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            <SelectGroup>
              <SelectLabel className="text-gray-500">Options</SelectLabel>
              <SelectItem value="assignment">Assignment</SelectItem>
              <SelectItem value="surprise-test">Surprise Test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Second Dropdown */}
        <Select onValueChange={(value) => setSecondValue(value)}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            <SelectGroup>
              <SelectLabel className="text-gray-500">Subjects</SelectLabel>
              <SelectItem value="ec">Engineering Chemistry</SelectItem>
              <SelectItem value="epc">English for Professional Communication</SelectItem>
              <SelectItem value="bee">Basic Electrical Engineering</SelectItem>
              <SelectItem value="m2">Mathematics 2</SelectItem>
              <SelectItem value="ic">Indian Constitution</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Third Dropdown */}
        <Select onValueChange={(value) => setThirdValue(value)}>
          <SelectTrigger className="w-[180px] bg-gray-800 text-white border-gray-700">
            <SelectValue placeholder="Select a number" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            <SelectGroup>
              <SelectLabel className="text-gray-500">Numbers</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Conditional Button with Animation */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          allSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Button variant="secondary" onClick={handleDownload}>Download</Button>
      </div>

      {/* Alert Dialog Trigger */}
      <div className="fixed bottom-4 right-4 z-50">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Contribute by Sharing Files</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Share Your Files</AlertDialogTitle>
              <AlertDialogDescription>
                We invite you to contribute by sharing files. Your contributions help improve our resources. Click below to fill out the form.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button onClick={() => window.open("https://forms.gle/4LzLiz8suarAj29H6", "_blank", "noopener,noreferrer")}>
                  Go to Form
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
