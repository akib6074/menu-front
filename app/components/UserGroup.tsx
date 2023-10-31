import React, { ReactElement } from "react";
import Layout from "../layout";

const UserGroup = (page: ReactElement) => {
  
};

UserGroup.getLayout = (page: ReactElement)=>{
    return (
        <Layout>
            {page}
        </Layout>
    );
}

export default UserGroup;
