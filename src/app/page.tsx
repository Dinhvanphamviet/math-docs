import GradeBlocks from "@/components/home/GradeBlocks";
import Hero from "@/components/home/Hero";
import LatestDocuments from "@/components/home/LatestDocuments";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <GradeBlocks />
      <LatestDocuments />
    </div>
  );
}