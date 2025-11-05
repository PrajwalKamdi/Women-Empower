// lib/utils/artist-utils.ts
import { ArtistFormData } from "../../types/dashboard-artist-tab";

export function formatDate(dateString: string, locale: string = 'en-IN'): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function formatDateLong(dateString: string, locale: string = 'en-IN'): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function validateFormData(formData: ArtistFormData): boolean {
  return !!(
    formData.artist_name &&
    formData.category &&
    formData.intro &&
    formData.joining_date &&
    formData.experience
  );
}

export function getInitials(name: string): string {
  return name.charAt(0).toUpperCase();
}

export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// If backend stores only R2 object keys, build a usable public URL for rendering
export function buildR2PublicUrl(possibleKeyOrUrl?: string | null): string {
  if (!possibleKeyOrUrl) return '';
  const val = String(possibleKeyOrUrl);
  if (/^https?:\/\//i.test(val)) return val; // already a URL
  const base = process.env.NEXT_PUBLIC_R2_PUBLIC_BASE;
  if (base) return `${base.replace(/\/$/, '')}/${val.replace(/^\//, '')}`;
  // Fallback: return the key (caller can decide to handle via signed URL if needed)
  return val;
}

// Alias convenience function matching other modules' expectations
export function getPublicR2Url(key: string): string {
  return buildR2PublicUrl(key);
}

// Optional placeholder upload; avoids import errors if referenced in client code.
export async function uploadToR2(_file: File | Blob, _key: string): Promise<{ key: string }> {
  throw new Error("uploadToR2 is not configured on this deployment.");
}

export function initialsFromName(name?: string) {
  return (name || "")
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("")
    .slice(0, 2);
}

export function displayName(name?: string, fallback: string = "Artist") {
  const n = (name || "").trim();
  return n.length ? n : fallback;
}

export function r2KeyForAvatar(artistId: string) {
  return `avatars/${artistId}.png`;
}

export function r2KeyForImage(artistId: string, filename: string) {
  return `artists/${artistId}/${filename}`;
}
