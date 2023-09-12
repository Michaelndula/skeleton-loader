import React from "react";
import SkeletonElement from "./skeletonElements";

const SkeletonProfile = ({ theme }) => {

    const themeClass = theme || 'light';

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div className="avatar">
                    <SkeletonElement type="avatar" />
                </div>
                <div className="profile">
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div> 
            </div>
        </div>
    );
}

export default SkeletonProfile;