import { Routes as Switch, Route } from "react-router-dom";
import { Footer } from "../components/footer";
import * as routeDefinitions from "./routeDefinitions";

const routes = Object.values(routeDefinitions);

const Routes = () => {
    return (
        <div>
            <Switch>
                {routes.map((route) => {
                    return (
                        <Route key={route.path} path={route.path} element={<route.Component />} />
                    );
                })}
            </Switch>
            <Footer />
        </div>
    );
};

export default Routes;
