/* global Office */

let dialog: Office.Dialog | null = null;

Office.onReady(() => {});

/**
 * Opens a dialog window - triggered by a button defined in the manifest file
 *
 */
function openDialog() {
  const dialogUrl = 'https://localhost:4200/';
  const dialogOptions = { width: 60, height: 60, displayInIframe: false };

  Office.context.ui.displayDialogAsync(dialogUrl, dialogOptions, result => {
    if (result.status === Office.AsyncResultStatus.Succeeded) {
      dialog = result.value;

      dialog.addEventHandler(Office.EventType.DialogMessageReceived, (arg: any) => {
        const messageFromDialog = JSON.parse(arg.message);
        console.log('message received in host page:', messageFromDialog);
      });

      dialog.addEventHandler(Office.EventType.DialogEventReceived, (arg: any) => {
        console.log('arg', arg);
      });
    } else {
      console.error('Failed to open dialog:', result.error.message);
    }
  });
}

// Register functions with Office
Office.actions.associate('openDialog', openDialog);
