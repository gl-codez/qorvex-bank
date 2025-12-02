import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-full w-full justify-between">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.png"
            width={500}
            height={500}
            alt="Auth image"
            style={{ height: "auto", width: "auto" }}
            loading="eager"
          />
        </div>
      </div>
    </main>
  );
}
