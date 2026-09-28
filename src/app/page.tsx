import { type Metadata } from "next";
import { asImageSrc, type Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

const fallbackSlices = [
  {
    slice_type: "hero",
    variation: "default",
    primary: {
      heading: {
        value: [{ type: "heading1", text: "FLEX Keyboards", spans: [] }],
      },
      body: {
        value: [
          {
            type: "heading2",
            text: "Built to feel different",
            spans: [],
          },
        ],
      },
      buy_button_text: "Explore",
    },
    items: [],
  },
  {
    slice_type: "marquee",
    variation: "default",
    primary: {
      direction: "Left",
      phrases: [{ text: "FLEX" }],
    },
    items: [],
  },
  {
    slice_type: "bento_box",
    variation: "default",
    primary: {
      heading: {
        value: [{ type: "heading2", text: "Designed to move", spans: [] }],
      },
      items: [],
    },
    items: [],
  },
  {
    slice_type: "color_changer",
    variation: "default",
    primary: {
      heading: {
        value: [{ type: "heading2", text: "Change the look", spans: [] }],
      },
      description: {
        value: [
          {
            type: "paragraph",
            text: "Try a different keycap finish.",
            spans: [],
          },
        ],
      },
    },
    items: [],
  },
  {
    slice_type: "switch_playground",
    variation: "default",
    primary: {
      heading: {
        value: [{ type: "heading2", text: "Find your switch", spans: [] }],
      },
      description: {
        value: [
          {
            type: "paragraph",
            text: "Explore the feel and sound of every press.",
            spans: [],
          },
        ],
      },
      switches: [],
    },
    items: [],
  },
  {
    slice_type: "purchase_button",
    variation: "default",
    primary: {
      eyebrow: "Ready when you are",
      heading: {
        value: [{ type: "heading2", text: "Take FLEX home", spans: [] }],
      },
      button_text: "Shop now",
      body: {
        value: [
          {
            type: "paragraph",
            text: "Checkout is available when Stripe is configured.",
            spans: [],
          },
        ],
      },
    },
    items: [],
  },
] as unknown as Content.HomepageDocumentData["slices"];

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => null);

  if (!page) {
    return (
      <>
        <SliceZone slices={fallbackSlices} components={components} />
        <section className="bg-black px-6 py-24 text-center text-white md:py-36">
          <h2 className="font-bold-slanted text-5xl uppercase md:text-8xl">
            Make room for better
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300 md:text-xl">
            Your next favorite keyboard is ready to become part of the setup.
          </p>
          <a
            href="#keycap-changer"
            className="mt-8 inline-flex rounded bg-[#01A7E1] px-5 py-3 text-xl font-bold uppercase text-black transition hover:bg-white"
          >
            Explore FLEX
          </a>
        </section>
      </>
    );
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage").catch(() => null);

  if (!page) {
    return {
      title: "FLEX Keyboards",
      description: "Explore FLEX interactive 3D keyboards.",
    };
  }

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}