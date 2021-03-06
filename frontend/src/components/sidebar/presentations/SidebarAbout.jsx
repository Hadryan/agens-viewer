import React from 'react'
import { ColoredLine, SubLabelRight, SubLabelLeft } from './SidebarComponents'

const SidebarAbout = ({releaseDate, version, license}) => {
    return (
        <div className="sidebar-setting">
            <div className="sidebar sidebar-header">
                <h4>About OpenBrowser</h4>
            </div>
            <div className="sidebar sidebar-body">
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1"><b>Made by Bitnine</b></label>
                    <ColoredLine />
                    <SubLabelLeft label={<span>Visit us at <a target="_blank" rel="noopener noreferrer" href="http://bitnine.net"> Bitnine!</a></span>} classes="py-1"></SubLabelLeft>
                </div>
                <div className="form-group pt-4">
                    <label><b>Current OpenBrowser Version</b></label>
                    <ColoredLine />
                    <div>
                        <h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <SubLabelRight label="OpenBrowser :" classes="col-sm-6"></SubLabelRight>
                                <SubLabelLeft label={version} classes="col-sm-6"></SubLabelLeft>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <SubLabelRight label="Released at :" classes="col-sm-6"></SubLabelRight>
                                <SubLabelLeft label={releaseDate} classes="col-sm-6"></SubLabelLeft>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <SubLabelRight label="License :" classes="col-sm-6"></SubLabelRight>
                                <SubLabelLeft label={license} classes="col-sm-6"></SubLabelLeft>
                            </div>
                        </h6>
                    </div>
                </div>
                <div className="form-group pt-4">
                    <label><b>You Have Feedback for us?</b></label>
                    <ColoredLine />
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <SubLabelLeft label={<span>Leave your feedback at <a target="_blank" rel="noopener noreferrer" href="http://jira.bitnine.net:9080/projects/OBFB/summary"> Here!</a> <br />Your feedback help us provide you better experience!</span>} classes="py-1"></SubLabelLeft>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SidebarAbout