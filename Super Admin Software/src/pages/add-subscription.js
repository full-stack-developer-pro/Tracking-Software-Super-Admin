import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/sidebar";
import AddSubscriptionSection from "../section/home/Subscription/add-subscription";
const AddSubscription = () => {
    React.useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <div className="bg-grey h-100">
            <Header />

            <section className="content-area mt-4">
                <Sidebar />

                <div className="Right-content">
                    <div className="main-content">
                        <AddSubscriptionSection />
                        <Footer />
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default AddSubscription;