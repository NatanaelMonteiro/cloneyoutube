import { Box, Button, Container, Typography } from "@material-ui/core";

import Layout from "@/components/Layout";

export default function Home() {
  const title = "Piratube";
  return (
    <Container maxWidth="lg">
      <Layout title={title}>
        <Typography variant="h3" component="h3">
          {title}
        </Typography>

        <Box>&nbsp;</Box>

        <Button color="primary" variant="contained">
          Butaum
        </Button>

        <Box>&nbsp;</Box>

        <Button color="secondary" variant="outlined">
          Boitata
        </Button>
      </Layout>
    </Container>
  );
}
