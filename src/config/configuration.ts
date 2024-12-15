export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
  },
  google: {
    credentials: {
      type: 'service_account',
      project_id: 'intense-crow-427010-r5',
      private_key_id: '52366a7e2dde73129ef59bb9767915f22e9fcdab',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkEpuDYEjoHNUZ\ny4z4ZrVryeRAa4RbheWjhYs+jvbrOrO1nmufYJG0m/hh+Qq/sJAxam9ayFUuKPMI\nM1vs23ZFjbsCJfhIiUCKbXCkhGESFk0aR4sAaZXULX86EGbkxfp6qZu2RWMxsfI3\nk4KsIH9Bb+NQ5ktRicAKrE3rJm2KuOH7fPWxmxtTvCwQO06mEe7Wncki0511lnvf\nSkru26Pe9GlNs/6qTeYqpWcbEV2BopipZ+XCTv8VWXJX1u1lku1Wf9pCV46kUQ2l\njJMHjZOXpLlApR09+BB006HdN2Rm62vobWiC9Q71TAPa3qbca5/BmhRb++eStDov\nhF/Rr0XXAgMBAAECggEAAMpWi1FxIkaqUESxDIu9u0j40zHYoB/bfJnBae8feO+W\n+VNcVdDDgNyeU2gs+tq1wvxXVrpT4QrzVB8TN3wDrmQ5ZXd6lcditj2uFG3XeLVh\n9JtTCtcMBGfPcfZCM3kHQ1MKrqJDY6XMzYZhlaPqTrLwzUxKEKk7oy5tok8rTrJP\nptJvGcBM/Qy0W6KPVFjHKDdZeSphrEKJia+LsNshPcON2DUrkbSn3KB8awo0vWBV\nHXRHCXHm5pP+i80WSrqFjxgC9PbyIkt3nyClHqQjG3Tb3+WU1//a0OXIzKnjicXv\nIfWQ2o690ukXphtIwFeo3BYAOMDoFf3WIkGmsL1yEQKBgQDbt6tgS48akAXpCXPS\nvpgVd9JDTQgWTi3WAoSsvCSGsftJClZYWOzn4mgAx0n5SfnPF/rmWO7V1C+sIttD\n3zXUCsfAMpdx79Hi1EtlhDuHnmmtjphXkTpeff1l5k6eFOElJIBzsrXddGDr8Qp2\nflzYDjsxJkM8MruDTM0UDr6X2QKBgQC/Kpy6/kUbG76Jeue2ViNiLUmJwnOqkuAC\nkMvTY9OtXI/fj3idk9GcRxGGGay7ohzXL5FFlLcdb0I8L0OtBb4/qowJyPGFgTZI\nY8D9i0ynNKk2c4fea1S+0ziRteZjP+wxj1UpPKgJKei6+QCCfV/pn6FkINk8By28\n56ammhptLwKBgFUfLSfbXg+eaIvF+7dT27vFdhJYz59EnoFg7GG3ajc80OuVM6p6\nmR2lG0Hh84i+3icbVTrUjYMN94Iq5uO+oC4MFyMg9odPr/K+6I7l0eJSvwJcUizq\nuMBO81L9DMw1rpwjLhikzcyD/+Cou7L4daPGr6v09OtnhDn0ESeKJtDRAoGAf3+u\nNNFtydzBQfRlIqlkxBAsYeL9PiDjoxJrvztvbMq1cofADGkQfkiwGV56ZFKFJcgl\n/eBoGQuhg36KhpW0A8Z9y/DnlQFO8Q0HJJOJtmNbEGQRlHjFdthtfFFzrXJu18cf\nJ3e7IxF+lWWJv35bP/glriBygqTPDpT6A1f4lCUCgYBhI0e+No58Ls6eHak0GlQ5\n544QkWZ9SlIiW2441CqYKixC/0hAEq3iSza3PhEmNGZrwIrUoJANYQV6DFzX6Ux6\nt7sYvlEmx+fHN4sJJWqMbOpmCZMXYPD+AIMQds8eSl8/jvD52FUbK1MUmHCcJ6j7\nr1l99pRCjU5uPbfNRwVFmQ==\n-----END PRIVATE KEY-----\n',
      client_email:
        'nobeli-gaga@intense-crow-427010-r5.iam.gserviceaccount.com',
      client_id: '105537392492829323062',
    },
  },
});
