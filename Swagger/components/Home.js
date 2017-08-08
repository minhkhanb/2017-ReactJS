import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div id="swagger-editor">
                <div className="swagger-container">
                    <div className="SplitPane vertical">
                        <div id="ace-editor" className="ace_editor ace-tomorrow-night-eighties ace_dark">
                            <div className="ace_gutter">

                            </div>
                            <div className="ace_scroller">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;