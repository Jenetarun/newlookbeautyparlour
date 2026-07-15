import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "new-look-beauty",
  title: "New Look Beauty Parlour",
  projectId: "8ekm5mh7",
  dataset: "production",
  basePath: "/studio",
  vite: (config) => ({
    ...config,
    base: "/studio/",
  }),
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Hero Section")
              .child(
                S.editor()
                  .id("hero")
                  .schemaType("hero")
                  .documentId("hero")
              ),
            S.listItem()
              .title("Contact Information")
              .child(
                S.editor()
                  .id("contact")
                  .schemaType("contact")
                  .documentId("contact")
              ),
            S.divider(),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("galleryItem").title("Gallery"),
            S.documentTypeListItem("offer").title("Offers"),
            S.documentTypeListItem("review").title("Customer Reviews"),
            S.documentTypeListItem("siteImage").title("Site Images"),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
