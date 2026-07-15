import { BRAND } from "@/data/salon";
import { useSanity } from "@/sanity/useSanity";
import { Q } from "@/sanity/client";

/**
 * useBrand — returns BRAND constants merged with Sanity contact document.
 * Sanity values override defaults where present.
 */
export function useBrand() {
  const { data } = useSanity(Q.contact, null);
  if (!data) return BRAND;
  return {
    ...BRAND,
    name: data.brandName || BRAND.name,
    tagline: data.tagline || BRAND.tagline,
    beautician: data.beautician || BRAND.beautician,
    designation: data.designation || BRAND.designation,
    phone: data.phone || BRAND.phone,
    phoneIntl: data.phoneIntl || BRAND.phoneIntl,
    address: data.address || BRAND.address,
    shortAddress: data.shortAddress || BRAND.shortAddress,
    instagram: data.instagramUrl || BRAND.instagram,
    instagramHandle: data.instagramHandle || BRAND.instagramHandle,
    mapsUrl: data.mapsUrl || BRAND.mapsUrl,
    mapsEmbed: data.mapsEmbed || BRAND.mapsEmbed,
    hours: Array.isArray(data.hours) && data.hours.length > 0 ? data.hours : BRAND.hours,
  };
}
