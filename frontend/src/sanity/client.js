import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "8ekm5mh7",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: true,
  perspective: "published",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) return null;
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}

// GROQ queries
export const Q = {
  hero: `*[_id == "hero"][0]{
    eyebrow, headingLine1, headingLine2, description, chapterLabel,
    "backgroundImage": backgroundImage
  }`,
  contact: `*[_id == "contact"][0]{
    brandName, tagline, beautician, designation, phone, phoneIntl,
    whatsapp, address, shortAddress, instagramUrl, instagramHandle,
    mapsUrl, mapsEmbed, hours
  }`,
  services: `*[_type == "service"] | order(order asc){ _id, name, category, description }`,
  gallery: `*[_type == "galleryItem"] | order(order asc){ _id, label, image, tall }`,
  offers: `*[_type == "offer"] | order(order asc){ _id, tag, title, price, description, valid, featured }`,
  reviews: `*[_type == "review"] | order(order asc){ _id, name, role, quote, rating, featured }`,
  siteImages: `*[_type == "siteImage"]{ key, caption, image }`,
};
