/**
 * Sanity Studio schemas for New Look Beauty Parlour.
 */

const imageField = {
  name: "image",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [{ name: "alt", title: "Alt text", type: "string" }],
};

const hero = {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    { name: "eyebrow", title: "Eyebrow text", type: "string", initialValue: "New Look Beauty Parlour" },
    { name: "headingLine1", title: "Heading — Line 1", type: "string", description: "e.g. 'Where beauty'" },
    { name: "headingLine2", title: "Heading — Line 2", type: "string", description: "e.g. 'meets perfection.'" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "chapterLabel", title: "Chapter label (top-right)", type: "string", initialValue: "Chapter 01 — The Ritual" },
    { ...imageField, name: "backgroundImage", title: "Background Image" },
  ],
  preview: { select: { title: "headingLine1", subtitle: "headingLine2" } },
};

const contact = {
  name: "contact",
  title: "Contact Information",
  type: "document",
  fields: [
    { name: "brandName", title: "Brand Name", type: "string", initialValue: "New Look Beauty Parlour" },
    { name: "tagline", title: "Tagline", type: "string", initialValue: "Where Beauty Meets Perfection" },
    { name: "beautician", title: "Beautician Name", type: "string" },
    { name: "designation", title: "Designation", type: "string" },
    { name: "phone", title: "Phone (display)", type: "string" },
    { name: "phoneIntl", title: "Phone (international, e.g. +919505648133)", type: "string" },
    { name: "whatsapp", title: "WhatsApp Number (with country code, no +)", type: "string" },
    { name: "address", title: "Full Address", type: "text", rows: 3 },
    { name: "shortAddress", title: "Short Address", type: "string" },
    { name: "instagramUrl", title: "Instagram URL", type: "url" },
    { name: "instagramHandle", title: "Instagram Handle", type: "string" },
    { name: "mapsUrl", title: "Google Maps Link", type: "url" },
    { name: "mapsEmbed", title: "Google Maps Embed URL", type: "url" },
    {
      name: "hours",
      title: "Working Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", title: "Day(s)", type: "string" },
            { name: "time", title: "Time", type: "string" },
          ],
          preview: { select: { title: "day", subtitle: "time" } },
        },
      ],
    },
  ],
};

const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (R) => R.required() },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Signature", "Skin", "Hair", "Grooming", "Occasion", "Nails", "Ritual", "Draping", "Little Ones"],
      },
    },
    { name: "description", title: "Short Description", type: "text", rows: 2 },
    { name: "order", title: "Sort Order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "category" } },
};

const galleryItem = {
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    { name: "label", title: "Label / Caption", type: "string" },
    { ...imageField, name: "image", title: "Photo", validation: (R) => R.required() },
    { name: "tall", title: "Tall (spans two rows)", type: "boolean", initialValue: false },
    { name: "order", title: "Sort Order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "label", media: "image" } },
};

const offer = {
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    { name: "tag", title: "Tag (e.g. New Client)", type: "string" },
    { name: "title", title: "Title", type: "string", validation: (R) => R.required() },
    { name: "price", title: "Price line (e.g. '20% off')", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "valid", title: "Validity / Fine print", type: "string" },
    { name: "featured", title: "Featured (large card)", type: "boolean", initialValue: false },
    { name: "order", title: "Sort Order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "price" } },
};

const review = {
  name: "review",
  title: "Customer Review",
  type: "document",
  fields: [
    { name: "name", title: "Client Name", type: "string", validation: (R) => R.required() },
    { name: "role", title: "Role / Context (e.g. 'Bride, Bhimavaram')", type: "string" },
    { name: "quote", title: "Quote", type: "text", rows: 4, validation: (R) => R.required() },
    { name: "rating", title: "Rating (1–5)", type: "number", initialValue: 5, validation: (R) => R.min(1).max(5) },
    { name: "featured", title: "Featured (large card)", type: "boolean", initialValue: false },
    { name: "order", title: "Sort Order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role" } },
};

const siteImage = {
  name: "siteImage",
  title: "Site Image (Asset)",
  type: "document",
  fields: [
    {
      name: "key",
      title: "Key",
      type: "string",
      description:
        "Identifier used by the site: heroBride, facialTreatment, hairStyling, hairSpa, mehendi, products, salonInterior, reception, makeupCloseup",
      validation: (R) => R.required(),
    },
    { name: "caption", title: "Caption", type: "string" },
    { ...imageField, name: "image", title: "Image", validation: (R) => R.required() },
  ],
  preview: { select: { title: "key", subtitle: "caption", media: "image" } },
};

export const schemaTypes = [hero, contact, service, galleryItem, offer, review, siteImage];
