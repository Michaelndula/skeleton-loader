import React from "react";
import SkeletonElement from "./skeletonElements";
import './skeletons.css';

const SkeletonArticle = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
        </div>
    );
};

export default SkeletonArticle;