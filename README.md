# Description
- Make an stocks tracking app which gets data from websockets

# Used technologies
- Use client rendering using React Js to render the website
- React router for routing
- Chart js for plotting data
- react-use to get local storage hook


# Technical choices
- Abstract out not UI related logic to custom hooks. So there are hooks like useWebSocket to fetch the data
- Code strucutre is using component/container. Components are logic-less react components and container are logic-fulll
- Using React's Context API for passing the feched data across the app using `DataProvider`
- Table Component is made using Compound Component Structure.
- Using Local Storage to save the last 11 prices for each stock

# Issues
- Right now, websocket is not loading data over https. Need to figure that out.
- Github pages deployed is facing some issue, So I have an alternate deployment link on vercel. Need to figure that out

# Links
- https://harish-aka-shivi.github.io/stocks-tracker/
- https://stocks-tracker.now.sh/
