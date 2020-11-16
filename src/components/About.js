import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">What is the purpose of this website?</span>
                            <p>The website has twin objectives. One, it provides high level status of the engagement in a dashboard format. Two, it provides a facility to manage configuration items in a limited way. This website does not replace Agile PM tools like Jira or a full fledged CMDB (Configration Management Database)</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">My customer does not have Agile PM tools, we use excel spreadsheets. Does this tool replace my spreadsheet?</span>
                            <p>This website is not a direct replacement to Agile PM tools or spreadsheets that are used to manage project. The website provides an executive dashboard and a facility to manage configuration items (in a limited way).</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">What is the architecture used to build this website?</span>
                            <p>The front-end is built using ReactJS and backend using AWS Serverless technologies (API Gateway, Lambda and DynamoDB).</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Where do I host this application?</span>
                            <p>The backend is completely serverless. The recommended approach to host frontend application is AWS. There are couple of serverless options, use S3 website hosting or AWS Amplify. You can also use on-premises server or EC2 machine to host the frontend</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About
