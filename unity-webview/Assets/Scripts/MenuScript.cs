using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class MenuScript : MonoBehaviour
{

    public GameObject webViewButton;
    public GameObject permissionButton;

    static WebCamTexture cam;

    // Start is called before the first frame update
    void Start()
    {
        webViewButton.GetComponent<Button>().onClick.AddListener(OnWebViewButtonClick);
        permissionButton.GetComponent<Button>().onClick.AddListener(OnPermissionButtonClick);
    }

    // Update is called once per frame
    void Update()
    {
         // Quits application on back button press
        if (Application.platform == RuntimePlatform.Android)
        {
            if (Input.GetKeyDown(KeyCode.Escape))
            {
                Application.Quit();
            }
        }
    }

    public void OnWebViewButtonClick()
    {
        SceneManager.LoadScene("WebViewScene");
    }

    public void OnPermissionButtonClick()
    {
        if (cam == null)
        {
            cam = new WebCamTexture();
        }
    }
}
