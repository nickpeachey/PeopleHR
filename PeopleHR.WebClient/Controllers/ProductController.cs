using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PeopleHR.WebClient.Models;

namespace PeopleHR.WebClient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public JsonResult Get()
        {

            if (_context.AppUserAuths.ToList().Count == 0)
            {
                _context.AppUserAuths.Add(new AppUserAuth
                {
                    CanAccessProducts = true,
                    UserName = "NPeachey"
                });

                _context.SaveChanges();
            }

            var result = _context.AppUserAuths.ToList();

            return new JsonResult(result);
        }
    }
}