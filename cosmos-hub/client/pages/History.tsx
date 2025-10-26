import Header from "@/components/Header";

export default function History() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DDDAFA] via-[#F2EAFD] to-[#F8E4FD]">
      <Header />
      <main className="pt-[160px] px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl font-bold text-black mb-4">History</h1>
          <p className="text-lg text-[#4D4D4D] mb-8">
            This page will show your translation history.
          </p>
          <p className="text-sm text-[#4D4D4D]">
            Continue prompting to add content to this page.
          </p>
        </div>
      </main>
    </div>
  );
}
