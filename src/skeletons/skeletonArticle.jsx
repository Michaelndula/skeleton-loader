import React from "react";
import SkeletonElement from "./skeletonElements";
import './skeletons.css';
import Shimmer from "./shimmer";

const SkeletonArticle = ({ theme }) => {
     const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonArticle;