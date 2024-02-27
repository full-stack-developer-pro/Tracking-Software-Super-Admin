import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/sidebar";
import EditSubscriptionSection from "../section/home/Subscription/subscription-edit";
const EditSubscription = () => {
    return (
        <div className="bg-grey h-100">
            <Header />
            <section className="content-area mt-4">
                <Sidebar />
                <div className="Right-content">
                    <div className="main-content">
                        <EditSubscriptionSection />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EditSubscription;