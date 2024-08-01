// src/app/404.tsx

import React from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button"; // Adjust the import based on your project structure

const Custom404 = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          Sorry, the file or page you're looking for was not found. Please contact the administrator for assistance.
        </p>
        <Button variant="secondary" onClick={() => router.push("/")}>Go to Homepage</Button>
      </div>
    </main>
  );
};

export default Custom404;
