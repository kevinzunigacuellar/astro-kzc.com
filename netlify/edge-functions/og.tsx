import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";

export default function handler(req: Request) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const title = params.get("title") ?? "Created with netlify edge functions";
  const pubDate = params.get("pubDate") ?? new Date().toISOString();
  const date = new Date(pubDate).toLocaleDateString("en-US", {
    dateStyle: "full",
  });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          padding: "0 48px",
          letterSpacing: "-.02em",
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 400 400"
          >
            <path
              fill="#93C5FD"
              d="M316.667 0H83.3333C37.3096 0 0 37.3096 0 83.3333V316.667C0 362.69 37.3096 400 83.3333 400H316.667C362.69 400 400 362.69 400 316.667V83.3333C400 37.3096 362.69 0 316.667 0Z"
            />
            <path
              fill="#1D4ED8"
              d="M142.333 316.667C139.86 316.645 137.415 316.136 135.139 315.169C132.862 314.203 130.798 312.797 129.065 311.033C127.331 309.269 125.962 307.18 125.036 304.887C124.11 302.593 123.645 300.14 123.667 297.667V85.6667C123.645 83.1934 124.11 80.7401 125.036 78.4467C125.962 76.1533 127.331 74.0648 129.065 72.3005C130.798 70.5361 132.862 69.1305 135.139 68.1639C137.415 67.1972 139.86 66.6885 142.333 66.6667H158.667C163.783 66.6667 168.117 68.55 171.667 72.3333C175.45 76.1167 177.333 80.55 177.333 85.6667V208.667C177.333 208.883 177.45 209 177.667 209L178.333 208.667L220 158C228 148.217 238.217 143.333 250.667 143.333H274.667C278.217 143.333 280.783 145 282.333 148.333C284.117 151.667 283.783 154.783 281.333 157.667L224.333 224.667C223.217 226 223.217 227.45 224.333 229L282 302C284.217 305.117 284.45 308.333 282.667 311.667C282.014 313.225 280.895 314.543 279.462 315.439C278.029 316.334 276.354 316.763 274.667 316.667H250.667C238.217 316.667 228.117 311.667 220.333 301.667L178.333 247C178.117 246.783 177.883 246.667 177.667 246.667C177.45 246.667 177.333 246.783 177.333 247V297.667C177.333 302.783 175.45 307.217 171.667 311C170.029 312.816 168.021 314.261 165.779 315.238C163.537 316.216 161.112 316.703 158.667 316.667H142.333Z"
            />
          </svg>
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            kevinzunigacuellar.com
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{
            fontSize: 20,
            color: "#6b7280",
          }}>{date}</div>
          <div
            style={{
              display: "flex",
              fontWeight: "bold",
              fontSize: 48,
              width: "auto",
              lineHeight: 1.4,
              padding: '5px 0px',
              backgroundImage: 'linear-gradient(90deg, #4ade80, #3b82f6, #a855f7)',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ), 
  );
}
