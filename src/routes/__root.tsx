import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";

import { THEME_SCRIPT } from "../components/theme-toggle";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}


function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">

        <h1 className="text-xl font-semibold text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing the page.
        </p>

        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Try again
        </button>

      </div>
    </div>
  );
}


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Jonas Kiwia — Software Engineer & Founder in Tanzania",
      },
      {
        name: "description",
        content:
          "Portfolio of Jonas Kiwia. Web apps, business systems, and software projects.",
      },
      {
        name: "author",
        content: "Jonas Kiwia",
      },
      {
        property: "og:title",
        content: "Jonas Kiwia — Software Engineer & Founder",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],

  }),

  component: RootComponent,

  notFoundComponent: NotFoundComponent,

  errorComponent: ErrorComponent,
});


function RootComponent() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: THEME_SCRIPT,
        }}
      />

      <Outlet />
    </>
  );
}