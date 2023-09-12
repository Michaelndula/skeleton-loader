import React from "react";
import SkeletonElement from "./skeletonElements";

const SkeletonProfile = () => {
    return (
        <div className="skeleton-wrapper">
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