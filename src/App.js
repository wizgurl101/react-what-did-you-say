import { Route, Switch, Redirect } from "react-router-dom";
import NewQuoteScreen from "./screens/NewQuoteScreen";
import QuoteDetailScreen from "./screens/QuoteDetailScreen";
import QuoteListScreen from "./screens/QuoteListScreen";
import Layout from "./components/layout/Layout";
import Error404Screen from "./screens/Error404Screen";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact component={QuoteListScreen} />
        <Route path="/quotes/:quoteId" component={QuoteDetailScreen} />
        <Route path="/new-quote" component={NewQuoteScreen} />
        <Route path="*" component={Error404Screen} />
      </Switch>
    </Layout>
  );
};

export default App;
