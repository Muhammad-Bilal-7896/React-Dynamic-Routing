import { userInfo } from "os";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../Pages/Home';

function AppRouter() {
    let routes = [
        { name: 'First', id: 1 },
        { name: 'Second', id: 2 },
        { name: 'Three', id: 3 },
        { name: 'Four', id: 4 },
    ]
    return (
        // <Router>
        //     <Route exact path="/" component={Home} />
        // </Router>
        <div>
            <h1>React Dynamic Routing</h1>
            {
                routes.map((item) =>
                    <div>
                        <a href={`/user/${item.id}`}>{item.name}</a>
                    </div>
                )
            }
        </div>
    )
}
export default AppRouter;