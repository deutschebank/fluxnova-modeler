/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import React, { PureComponent } from 'react';

import CloudIcon from '../../resources/icons/Cloud.svg';
import PlatformIcon from '../../resources/icons/Platform.svg';

import * as css from './EmptyTab.less';

import {
  Tab
} from './primitives';

import Flags, { DISABLE_ZEEBE, DISABLE_PLATFORM } from '../util/Flags';


export default class EmptyTab extends PureComponent {

  componentDidMount() {
    this.props.onShown();
  }

  triggerAction() { }

  renderDiagramButton = (key, entry) => {
    const {
      onAction
    } = this.props;

    return (
      <button key={ key } className="btn btn-secondary" onClick={ () => onAction(entry.action, entry.options) }>
        {entry.icon && <entry.icon />}
        {entry.label}
      </button>
    );
  };

  /**
   * @param {string} group
   *
   * @return {React.JSX.Element[]}
   */
  getCreateButtons(group) {
    const providers = this.props.tabsProvider?.getProviders() || {};

    const tabs = Object.values(providers)
      .flatMap(tab => tab.getNewFileMenu && tab.getNewFileMenu().map(entry => ({ ...entry, icon: tab.getIcon() })))
      .filter(entry => entry?.group === group)
      .map((entry, index) => {
        return this.renderDiagramButton(index, entry);
      });

    return tabs;
  }

  renderPlatformColumn = () => {

    const createButtons = this.getCreateButtons('Flowave');

    return (
      <div id="welcome-page-platform" className="welcome-card">
        <div className="engine-info">
          <div className="engine-info-heading">
            <PlatformIcon className="engine-icon platform-icon" />
            <h3>Flowave</h3>
          </div>
          <a href="https://camunda.com/products/camunda-platform/?utm_source=modeler&utm_medium=referral">See version details</a>
        </div>

        <p>Create a new file</p>

        {createButtons}
      </div>
    );
  };

  renderLearnMoreColumn = () => {

    return (
      <div id="welcome-page-learn-more" className="welcome-card">
        <div className="learn-more">
          <h3>Learn more</h3>
          <div className="article relative">
            <p>Introduction to Flowave</p>
            <a href="https://camunda.com/blog/2022/04/camunda-platform-8-orchestrate-all-the-things?utm_source=modeler&utm_medium=referral">Read blog post</a>
          </div>
          <div className="article relative">
            <p>Migrating from Camunda 7</p>
            <a href="https://docs.camunda.io/docs/guides/migrating-from-Camunda-Platform/?utm_source=modeler&utm_medium=referral">Camunda Docs</a>
          </div>
          <div className="article">
            <p>About Modeler 1</p>
            <a href="#" onClick={ () => this.props.onAction('emit-event', { type: 'versionInfo.open' }) }>Open &quot;What&apos;s new&quot;</a>
          </div>
          <div className="article">
            <p>Model your first diagram</p>
            <a href="https://docs.flowave.finos.org/">Flowave Docs</a>
          </div>
        </div>
      </div>
    );
  };

  render() {

    return (
      <Tab className={ css.EmptyTab }>
        {!Flags.get(DISABLE_ZEEBE) && !Flags.get(DISABLE_PLATFORM) && <h2 className="welcome-header">Choose the right version for your project:</h2>}
        <div className="welcome-cards">
          {!Flags.get(DISABLE_PLATFORM) && <>{this.renderPlatformColumn()}</>}
          {this.renderLearnMoreColumn()}
        </div>
      </Tab>
    );
  }
}

