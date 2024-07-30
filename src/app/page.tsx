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

// TypographyH1 component
function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white mb-6">
      Access assignment and surprise test Q/A
    </h1>
  );
}

// Updated TypographyMuted component with a more professional message
function TypographyMuted() {
  return (
    <p className="text-sm" style={{ color: "rgb(161, 161, 170)" }}>
      Please select the appropriate options.
    </p>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-sm text-center mb-4" style={{ color: "rgb(161, 161, 170)" }}>
      <p className="mb-4">
        designed by{" "}
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
    if (allSelected) {
      // Adjust this URL based on how you serve files from the backend
      const filePath = `http://localhost:5000/data/ass/${secondValue}/${thirdValue}/rtg.pdf`;
      window.location.href = filePath;
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
              <SelectLabel>Options</SelectLabel>
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
              <SelectLabel>Subjects</SelectLabel>
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
              <SelectLabel>Numbers</SelectLabel>
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
