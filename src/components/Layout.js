import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

// Wrapper component to handle the main layout
const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
