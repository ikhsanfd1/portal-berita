import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";
import { Inertia } from "@inertiajs/inertia";

export default function Homepage(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [news, setNews] = useState([]);

    useEffect(() => {
        if (searchQuery) {
            fetch(`/search?q=${encodeURIComponent(searchQuery)}`)
                .then((response) => response.json())
                .then((data) => setNews(data.news));
        } else {
            setNews(props.news.data);
        }
    }, [searchQuery]);

    return (
        <div className="min-h-screen bg-slate-50 ">
            <Head title={props.title} />
            <Navbar user={props.auth.user} setSearchQuery={setSearchQuery} />
            {props.news.data ? (
                <>
                    <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-6 p-4 mt-4">
                        <NewsLists news={news} />
                    </div>
                    <div className="flex justify-center items-center">
                        <Paginator meta={props.news.meta} />
                    </div>
                </>
            ) : (
                <p className="flex justify-center items-center mt-48 text-2xl">
                    No News Available
                </p>
            )}
        </div>
    );
}
