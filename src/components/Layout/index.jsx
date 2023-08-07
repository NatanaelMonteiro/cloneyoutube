import { makeStyles } from "@material-ui/styles";
import Head from "next/head";

import Topbar from "./Topbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColour: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },

  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingleft: 256,
    },
  },

  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },

  content: {
    flex: "1 1 auto",
    overflow: "auto",
    height: "100%",
  },
}));

export default function Layout({ children, title }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1-0" />
        <title>{title}</title>
      </Head>
      <div className={classes.root}>
        <Topbar></Topbar>
        <div>navbar</div>
        <div className={classes.weapper}>
          <div className={classes.contenContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
