import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/sidebar";
import AllSubscriptionList from "../section/home/Subscription/Subscription-list";
const SubsciptionList = () => {
  React.useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="bg-grey h-100">
      <Header />
      
<section className="content-area mt-4">
    <Sidebar/>
    <div className="Right-content">
      <div className="main-content">
      <AllSubscriptionList/>
    
      </div> 
      <Footer />
    </div>
</section>
      
     
    </div>
  );
};

export default SubsciptionList;