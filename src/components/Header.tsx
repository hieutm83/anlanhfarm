import React from "react";
import { FizziLogo } from "@/components/FizziLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-50 h-50 cursor-pointer text-sky-800" />
    </header>
  );
}