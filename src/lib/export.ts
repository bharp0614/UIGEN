import JSZip from "jszip";

export function downloadFile(path: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = path.split("/").pop() || "file";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function downloadProjectAsZip(
  files: Map<string, string>,
  projectName: string
) {
  const zip = new JSZip();

  for (const [path, content] of files) {
    // Remove leading slash so files are stored relative to the zip root
    const relativePath = path.startsWith("/") ? path.slice(1) : path;
    zip.file(relativePath, content);
  }

  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${sanitizeFileName(projectName)}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-z0-9\-_]/gi, "_").replace(/_+/g, "_").slice(0, 50);
}
