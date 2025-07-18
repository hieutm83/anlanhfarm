import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ANLANH - Trà thảo mộc dịu tâm",
    description: "Trà thảo mộc dịu nhẹ, thư giãn và tốt cho sức khỏe.",
    openGraph: {
      title: "ANLANH - Trà thiên nhiên",
      images: [{ url: "/bg1.png" }], // ảnh bạn đặt trong /public
    },
  };
}


export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return <SliceZone slices={home.data.slices} components={components} />;
}