import { h, Fragment, homepage } from "./homepage/mod.js";

const PROJECTS = {
  Blog: "https://tinyclouds.org/",
  Deno: "https://github.com/denoland/deno",
};

homepage(() => {
  return h(
    Fragment,
    null,
    h(
      "header",
      {},
      h("img", {
        src: "https://tinyclouds.org/ry.jpg",
        style: "max-width: 120px",
      }),
      h("h2", {}, "Ben"),
      h("a", { href: "ryan@deno.com" }, "ryan@deno.com")
    ),
    h(
      "div",
      { style: "margin-top: 64px;" },
      Object.keys(PROJECTS).map((name) =>
        h("p", {}, h("a", { href: PROJECTS[name] }, name))
      )
    )
  );
});
