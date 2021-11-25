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
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    )
}
export default AppRouter;