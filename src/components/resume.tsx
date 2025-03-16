'use client';
import toast, { Toaster } from "react-hot-toast";

interface ResumeProps {
  pdfUrl: string;
  fileName: string;
  buttonText?: string;
}

const Resume = ({ pdfUrl, fileName, buttonText }: ResumeProps) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }
      const blob = await response.blob();
      const link = document.createElement("a");
      const blobUrl = URL.createObjectURL(blob);
      link.href = blobUrl;
      link.download = fileName || "download.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`Error downloading PDF: ${errorMessage}`);
      console.error("Error downloading PDF:", errorMessage);
    }
  };

  return (
    <div className="max-w-[200px] mx-auto md:mx-0 flex justify-center lg:flex lg:justify-start">
      <button
        onClick={downloadPDF}
        className="relative bg-gradient-to-r from-[#ef4444] to-[#f87171] rounded-lg p-[1px] group focus:outline-none focus:ring-2 focus:ring-[#ef4444]/50 transition-transform duration-150 active:translate-y-[1px]"
      >
        <span className="flex items-center justify-center w-full h-full bg-[#0b040c] rounded-md px-6 py-4 transition-colors duration-300 group-hover:text-[#f87171]">
          <span className="font-medium text-[18px] font-clash text-white">
            {buttonText || "Download PDF"}
          </span>
        </span>
        {/* Hover glow layer */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ef4444]/10 to-[#f87171]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
      </button>
      <Toaster />
    </div>
  );
};

export default Resume;
