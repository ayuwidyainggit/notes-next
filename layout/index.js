import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Layout({ children, metaTitle, metaDesc, title }) {
  return (
    <div className=" ">
      <Head>
        <title>My Notes - {metaTitle}</title>
        <meta
          name="description"
          content={metaDesc || "Generated by create next app"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
