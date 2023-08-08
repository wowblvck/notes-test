import { CssBaseline } from "@mui/material";
import { NotesPage } from "@pages";
import { Header } from "@features/ui";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <NotesPage />
      </main>
    </>
  );
};

export default App;
