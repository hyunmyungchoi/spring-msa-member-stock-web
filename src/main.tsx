import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuthLayout from "@hyunmyungchoi/member-common/layouts/UserAuthLayout";
import UserLayout from "@hyunmyungchoi/member-common/layouts/UserLayout";
import UserAuthPage from "@hyunmyungchoi/member-common/pages/UserAuthPage";
import { userStore } from "@hyunmyungchoi/member-common/store/userStore";
import "@hyunmyungchoi/member-common/App.css";
import "@hyunmyungchoi/member-common/index.css";
import StockEntryPage from "./pages/StockEntryPage";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={userStore}>
            <BrowserRouter>
                <Routes>
                    <Route element={<UserAuthLayout />}>
                        <Route path="/auth" element={<UserAuthPage />} />
                    </Route>
                    <Route element={<UserLayout />}>
                        <Route path="*" element={<StockEntryPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);

