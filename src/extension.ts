"use strict";

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "hNavigator" is now active!');

  let disposable = vscode.commands.registerCommand(
    "hNavigator.moveWordRight",
    () => {
      vscode.window.showInformationMessage("hNavigator.moveWordRight!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
