import { Typography, Box } from "@mui/material";
import LinkButton from "./components/LinkButton";

export default function Home() {
  return (
    <main>
      <Box className="mx-auto max-w-4xl">
        <Typography variant="h1">Header Font</Typography>
        <Typography variant="body1">Body Font!</Typography>
        <LinkButton href="/test" variant="contained" color="primary" className="mt-4 ">
          Test Page
        </LinkButton>
        <br />
        <Typography variant="caption">
          Contains a page of our customized MUI components.
        </Typography>
      </Box>
    </main>
  );
}
