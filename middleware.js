export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/", "/route", "/schedule", "/book"],
};
