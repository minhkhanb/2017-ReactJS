import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div id="swagger-editor">
                <div className="topbar">
                    <div className="topbar-wrapper">
                        <a href="#" className="link"><img height="30" width="30" className="topbar-logo__img" src="static/images/logo.png" alt="" /><span className="topbar-logo__title">Swagger Editor</span></a>
                    </div>
                </div>
                <div className="swagger-container">
                    <div className="SplitPane vertical">
                        <div className="SplitPane vertical Pane1">
                            <div id="ace-editor" className="ace_editor ace-tomorrow-night-eighties ace_dark">
                                <div className="ace_gutter">
                                    <div className="ace_layer ace_gutter-layer ace_folding-enabled">
                                        <div className="ace_gutter-cell">1</div>
                                        <div className="ace_gutter-cell">2</div>
                                        <div className="ace_gutter-cell">3</div>
                                        <div className="ace_gutter-cell">4</div>
                                        <div className="ace_gutter-cell">5</div>
                                        <div className="ace_gutter-cell">6</div>
                                        <div className="ace_gutter-cell">7</div>
                                        <div className="ace_gutter-cell">8</div>
                                        <div className="ace_gutter-cell">9</div>
                                        <div className="ace_gutter-cell">10</div>
                                        <div className="ace_gutter-cell">11</div>
                                        <div className="ace_gutter-cell">12</div>
                                        <div className="ace_gutter-cell">13</div>
                                        <div className="ace_gutter-cell">14</div>
                                        <div className="ace_gutter-cell">15</div>
                                        <div className="ace_gutter-cell">16</div>
                                        <div className="ace_gutter-cell">17</div>
                                        <div className="ace_gutter-cell">18</div>
                                        <div className="ace_gutter-cell">19</div>
                                        <div className="ace_gutter-cell">20</div>
                                        <div className="ace_gutter-cell">21</div>
                                        <div className="ace_gutter-cell">22</div>
                                        <div className="ace_gutter-cell">23</div>
                                        <div className="ace_gutter-cell">24</div>
                                        <div className="ace_gutter-cell">25</div>
                                        <div className="ace_gutter-cell">26</div>
                                        <div className="ace_gutter-cell">27</div>
                                        <div className="ace_gutter-cell">28</div>
                                        <div className="ace_gutter-cell">29</div>
                                        <div className="ace_gutter-cell">30</div>
                                        <div className="ace_gutter-cell">31</div>
                                        <div className="ace_gutter-cell">32</div>
                                        <div className="ace_gutter-cell">33</div>
                                        <div className="ace_gutter-cell">34</div>
                                        <div className="ace_gutter-cell">35</div>
                                        <div className="ace_gutter-cell">36</div>
                                        <div className="ace_gutter-cell">37</div>
                                        <div className="ace_gutter-cell">38</div>
                                        <div className="ace_gutter-cell">39</div>
                                    </div>
                                </div>
                                <div className="ace_scroller">
                                    <div className="ace_content">
                                        <div className="ace_layer ace_text-layer">
                                            <div className="ace_line_group">
                                                <div className="ace_line">
                                                    <span className="ace_meta ace_tag">Swagger</span>
                                                    <span className="ace_keyword">:</span>
                                                    <span className="ace_string">2.0</span>
                                                </div>
                                            </div>
                                            <div className="ace_line_group">
                                                <div className="ace_line">
                                                    <span className="ace_meta ace_tag"> description</span>
                                                    <span className="ace_keyword">:</span>
                                                    <span className="ace_string">"This is a sample server Petstore </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SplitPane vertical Pane2">

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;