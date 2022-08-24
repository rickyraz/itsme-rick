/** @jsx h */
/** @jsxFrag Fragment */

import { Head } from "https://deno.land/x/fresh@1.0.2/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { Fragment, h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { css, tw } from "twind/css";

// import * as gsap from "https://esm.sh/gsap@3.11.0";
import * as Icons from "../components/icons.tsx";

export default function MainPage(props: PageProps) {
  const TITLE = "Rick Instagram Links";
  const DESCRIPTION = " Collection of links from rickyrazhari";

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="links instagram" />
        <meta property="og:url" content={props.url.href} />
        {/* <meta property="og:image" content={ogImageUrl} /> */}
      </Head>
      <Content />
    </>
  );
}

function Content() {
  return (
    <div>
      <div class={tw`flex justify-center`}>
        <img src="/inosuke.webp" alt="inosuke background" class={tw`w-auto`} />
      </div>

      <div
        class={tw`px-8 mx-auto max-w-screen-md -mt-28 bg-gradient-to-t from-[#02071B] to-[#10182E] h-screen`}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

// INSIDE CONTENT -----------

function Header() {
  return (
    <header>
      <div
        class={tw`flex justify-center items-center`}
      >
        <div
          class={tw`rounded-full bg-gradient-to-r p-[0.5px] from-[#4A6DC6] to-[#10182E] mt-12`}
        >
          <img
            src="/rick.jpg"
            height="200px"
            alt="rickyrazhari-logo"
            class={tw` rounded-full p-1 w-24`}
          />
        </div>
      </div>
      <div class={tw`mt-4 text-base text-sans text-center `}>
        <h1 class={tw`text-white`}>
          Hi! it' me rick, your old friend
        </h1>
        <h2 class={tw`mt-2 text-gray-400`}>
          these are my social media and number.. call me yaa.. whenever you want
          or need help
        </h2>
      </div>
    </header>
  );
}

function Main() {
  const stylebtn = tw`bg-gray-100 w-full rounded-full py-3 box`;
  const styletext = tw`text-gray-800 text-sans font-medium text-sm`;

  //-- PROBLEM IN GSAP.UTILS.SELECTOR()
  let ref2 = null;
  const setRef = (dom: any) => ref2 = dom;
  const el = useRef(ref2);

  // -- uses el.current.querySelectorAll() internally
  // const q = gsap.utils.selector(el);

  // useEffect(() => {
  //   // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
  //   gsap.to(q(".box"), {
  //     x: 100,
  //     stagger: 0.33,
  //     repeat: -1,
  //     repeatDelay: 1,
  //     yoyo: true,
  //   });
  // }, []);

  return (
    <main class={tw`mt-8`}>
      <div ref={setRef} class={tw`space-y-6`}>
        <button class={stylebtn}>
          <a
            href="https://twitter.com/rickyrazhari8"
            class={tw`flex items-center justify-center rounded-full`}
          >
            <Icons.TwitterIcon />
            <span class={styletext}>
              Twitter
            </span>
          </a>
        </button>
        <button class={stylebtn}>
          <a
            href="https://wa.me/+6281902794798?text=p"
            class={tw`flex items-center justify-center`}
          >
            <Icons.WhatsappIcon />
            <span class={styletext}>
              Whatsapp
            </span>
          </a>
        </button>
        <button class={stylebtn}>
          <a
            href="https://github.com/rickyraz"
            class={tw`flex items-center justify-center`}
          >
            <Icons.GithubIcon />
            <span class={styletext}>
              Github
            </span>
          </a>
        </button>
        <button class={stylebtn}>
          <a
            href="https://www.behance.net/rickyrazhari"
            class={tw`flex items-center justify-center`}
          >
            <Icons.BehanceIcon />
            <span class={styletext}>
              Behance
            </span>
          </a>
        </button>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer class={tw`mt-8 pb-12 text-gray-400 text-center`}>
      besok masih harus ada, stay alive ..
    </footer>
  );
}
