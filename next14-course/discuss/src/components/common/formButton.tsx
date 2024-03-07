"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FromButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FromButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
