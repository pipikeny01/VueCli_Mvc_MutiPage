﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DotnetFrameworkVueCli.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Vue()
        {
            return View();
        }

        public ActionResult Components()
        {
            return View();
        }

        public ActionResult MyFirstView()
        {
            ViewBag.Go = "";
            return View();
        }

    }
}