import React from 'react';
import Link from 'next/link'

const StudentInfo = () => {
    return (
        <div>
            <h1>Cody Tran</h1>

            <p>My Github Repository:

                <Link legacyBehavior href="https://github.com/pastewarecode/cprg306-assignments" passHref>
                    <a target="_blank" style={{color:'blue', textDecoration:'underline'}}>Repository Link</a>
                </Link>
            </p>
        </div>
    );
};

export default StudentInfo;